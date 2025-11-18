import Navlink from "@/components/Navlink";


export default function Home() {
  const container = `flex-1 bg-[url('/homepage-bg.jpg')] bg-cover bg-center bg-no-repeat
                     `
  const wrapper = `flex flex-col gap-10 items-center w-11/12 mx-auto mt-20`
  const link = `text-orange-50  `
  const li = `w-full border border-orange-50 rounded-lg p-2`
  return (
    <section className={container}>
      <section className={wrapper}>
        <section className="text-orange-50 flex flex-col gap-6">
          <h1 className="text-3xl font-bold">Craving delicious food? We got the perfect meals.</h1>
          <p className="text-lg font-semibold">
            Add flavor to your life by dining at Jade Lily.
            Experience culinary delights that make every meal special.
          </p>
        </section>
        <section className="w-full">
          <ul className="flex flex-col gap-6 w-full">
            <li className={li}>
              <Navlink href="/menu" className={link}>Discover our menu</Navlink>
            </li>
            <li className={li}>
              <Navlink href="/account" className={link}>Order online</Navlink>
            </li>
            <li className={li}>
              <Navlink href="/account" className={link}>Book a table</Navlink>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
}
