// Works.jsx
import React from 'react'
import works from '../api/mockinfo/works'
import { map as _map, isEmpty as _isEmpty, chunk as _chunk } from 'lodash'
import SVGbyTheme from '../components/SVGbyTheme'

const Works = () => {
    // 从 mock 数据中解构出 data 和 title
    const { data, title } = works || {}
    // 如果 data 不为空，则将数据按每行2个卡片分组，否则为空数组
    const displayList = _isEmpty(data) ? [] : _chunk(data, 2)

    return (
        <div className="works-module p-5">
            {/* 标题区域 */}
            <div className="mb-4 text-center text-slate-800 text-2xl font-medium leading-none tracking-tight dark:text-zinc-200">
                {title}
            </div>
            {/* 卡片列表容器：使用 Flex 布局、换行，并设置间距 */}
            <div className="flex flex-wrap justify-around gap-5">
                {_map(displayList, (displayRow, rowIndex) => {
                    // 如果一行只有一条数据，采用单卡片布局（大图、详细描述）
                    if (displayRow.length === 1) {
                        const { title, banner, descriptions, link } = displayRow[0] || {}
                        return (
                            <div key={`works_rows_${rowIndex}`} className="w-full flex flex-col">
                                <div className="flex bg-slate-50 dark:bg-gray-700 rounded-lg overflow-hidden">
                                    {/* 图片区域 */}
                                    <div className="relative basis-1/2 overflow-hidden" style={{ paddingTop: '50%' }}>
                                        <img
                                            className="absolute top-0 left-0 w-full h-full object-cover"
                                            src={banner}
                                            alt={title}
                                        />
                                    </div>
                                    {/* 内容区域 */}
                                    <div className="flex flex-col justify-between p-4 basis-1/2">
                                        <div>
                                            <h3 className="text-slate-800 text-base font-medium leading-5 line-clamp-2 dark:text-stone-200">
                                                {title}
                                            </h3>
                                            <p className="mt-2 text-slate-500 text-sm leading-4 line-clamp-5 dark:text-gray-400">
                                                {descriptions}
                                            </p>
                                        </div>
                                        {link && (
                                            <div className="mt-4 flex items-center gap-1.5">
                                                <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                                                    <div className="w-4 h-4">
                                                        <SVGbyTheme svg="./misc/link.svg" />
                                                    </div>
                                                </div>
                                                <a
                                                    href={link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-indigo-500 text-xs font-bold cursor-pointer dark:text-indigo-300"
                                                >
                                                    {link}
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    // 如果一行有两个数据，则采用并排展示的方式
                    return (
                        <div key={`works_rows_${rowIndex}`} className="flex w-full gap-5">
                            {_map(displayRow, (item, itemIndex) => {
                                const { title, banner, descriptions, link } = item || {}
                                return (
                                    <div
                                        key={`works_rows_${rowIndex}_${itemIndex}`}
                                        className="flex flex-col bg-slate-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden flex-1 min-w-[300px]"
                                    >
                                        {/* 图片区域：利用相对定位和padding-top实现宽高比例 */}
                                        <div className="relative pt-[50%] overflow-hidden">
                                            <img
                                                className="absolute top-0 left-0 w-full h-full object-cover"
                                                src={banner}
                                                alt={title}
                                            />
                                        </div>
                                        {/* 内容区域 */}
                                        <div className="p-4 flex flex-col flex-grow">
                                            <h3 className="text-slate-800 text-base font-medium leading-5 line-clamp-1 dark:text-stone-200">
                                                {title}
                                            </h3>
                                            <p className="mt-2 text-slate-500 text-sm leading-4 line-clamp-3 dark:text-gray-400">
                                                {descriptions}
                                            </p>
                                            {link && (
                                                <div className="mt-4 flex items-center gap-1.5">
                                                    <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                                                        <div className="w-4 h-4">
                                                            <SVGbyTheme svg="./misc/link.svg" />
                                                        </div>
                                                    </div>
                                                    <a
                                                        href={link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-indigo-500 text-xs font-bold cursor-pointer dark:text-indigo-300"
                                                    >
                                                        {link}
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Works
