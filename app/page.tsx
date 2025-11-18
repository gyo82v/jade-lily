import Navlink from "@/components/Navlink";


export default function Home() {
  return (
    <section className="flex-1 bg-[url('/homepage-bg.jpg')] bg-cover bg-center bg-no-repeat w-full " >
      <section>
        <h1>Craving delicious food? We got the perfect meals.</h1>
        <p>
          Add flavor to your life by dining at Jade Lily.
          Experience culinary delights that make every meal special.
        </p>
      </section>
      <section>
        <Navlink href="/menu">Discover our menu</Navlink>
        <Navlink href="/account">Order online</Navlink>
        <Navlink href="/account">Book a table</Navlink>
      </section>
    </section>
  );
}
