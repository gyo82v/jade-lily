
export function renderTags(tags:String[]){
   return tags.map((tag, i) => (
    <span key={i} className="">
        <span className="italic font-semibold">{tag}</span>
        {i < tags.length - 1 && (
        <span className="mx-1"> • </span>
      )}
    </span>
   ))
}