ok, that was perfect. we are finished with the navbar.

next step : design the "JadeLily" h1 , that is the title/logo for the all app.

it is here in the Header component :

 <>
    <header className={header} role="banner">
        <h1 className={h1}>JadeLily</h1>
        <ClientProviders>
            <Navbar />
        </ClientProviders>
    </header>
    <div aria-hidden="true" className="w-full">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-200/40 to-transparent" />
    </div>
</>