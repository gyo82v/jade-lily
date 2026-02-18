export default function AccountMenuFilters({filtersArr}){
    const filters = filtersArr.map(filter => {
        return(
            <li key={filter}>
                <p>{filter}</p>
            </li>
        )
    })
    return(
        <nav>
            <ul className="flex gap-1">
                {filters}
            </ul>
        </nav>
    )
}