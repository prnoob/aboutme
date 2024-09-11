'use client'

import React, { useEffect, useState, useRef } from 'react'
import styles from './Photography.module.css'
import photography from '../api/mockinfo/photography'

interface Photo {
    photo: string
    title: string
}

interface PhotographyData {
    title: string
    data: Photo[]
}

const typedPhotography = photography as PhotographyData

const Photography: React.FC = () => {
    const [photos, setPhotos] = useState<Photo[]>([])
    const [translateX, setTranslateX] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (typedPhotography.data && typedPhotography.data.length > 0) {
            const repeatedPhotos = Array(5).fill(typedPhotography.data).flat()
            setPhotos(repeatedPhotos)
        }
    }, [])

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        let animationFrameId: number
        let startTime: number

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime

            const newTranslateX = (progress / 100) % (typedPhotography.data.length * 400)
            setTranslateX(-newTranslateX)

            if (progress >= typedPhotography.data.length * 400 * 100) {
                startTime = timestamp
            }

            animationFrameId = requestAnimationFrame(animate)
        }

        animationFrameId = requestAnimationFrame(animate)

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId)
            }
        }
    }, [])

    return (
        <div className={`${styles.photographySection} w-[1000px] mb-8`}>
            <h2 className={`${styles.sectionTitle} text-2xl font-bold text-left mb-4 text-gray-900 dark:text-gray-100`}>
                Photography
            </h2>
            <div className={`${styles.photographyContainer} w-[1000px] overflow-hidden`} ref={containerRef}>
                <div className={styles.galleryScroll} style={{ transform: `translateX(${translateX}px)` }}>
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className={`${styles.galleryItem} flex-none w-[400px] h-[266px] relative mr-5`}
                        >
                            <img src={photo.photo} alt={photo.title} className="w-full h-full object-cover" />
                            <div
                                className={`${styles.galleryItemTitle} absolute bottom-2.5 left-2.5 text-white text-base font-bold`}
                            >
                                {photo.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Photography
