import projects from "../../../data/projects.json";
import FilterTag from "./FilterTag";

export default function Filter({ filterTags, setFilterTags }: { filterTags: string[], setFilterTags: (arg: string[]) => void }) {
    const raw_tags = projects.map((project) => {
        return project.stack
    })

    let processed_tags: string[] = [];

    for (const tag of raw_tags) {
        processed_tags = [
            ...processed_tags,
            ...tag.filter(e => !processed_tags.includes(e))
        ]
    }

    const stackItems = processed_tags.map((stackItem, i) => {
        return <FilterTag key={i} label={stackItem} filterTags={filterTags} setFilterTags={setFilterTags} />
    });

    return (
        <ul className="stack filter">
            {stackItems}
        </ul>
    );
}