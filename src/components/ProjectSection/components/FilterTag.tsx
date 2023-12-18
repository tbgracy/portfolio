type Props = {
    label: string,
    filterTags: string[],
    setFilterTags: (arg: string[]) => void
}

export default function FilterTag({ label, filterTags, setFilterTags }: Props) {
    const className = 'project__stack-item' + (
        filterTags.includes(label) ? ' selected' : ''
    )

    function toggleFilterTag() {
        let newFilters: Array<string> = [...filterTags];

        if (filterTags.includes(label)) {
            newFilters = newFilters.filter((tag) => tag !== label)
        } else {
            newFilters.push(label);
        }

        setFilterTags(newFilters);
    }

    return <li className={className} onClick={toggleFilterTag}>{label}</li>
}

