
export function renderTags(tags:string[]){
   return tags.map((tag, i) => (
    <span key={i} className="">
        <span className="italic font-semibold">{tag}</span>
        {i < tags.length - 1 && (
        <span className="mx-1"> • </span>
      )}
    </span>
   ))
}

export function formatDate(date: Date){
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}