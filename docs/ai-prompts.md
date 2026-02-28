ok, thank you.

i have an AuthGuard that will give access to the user.

for example here in the /account layout :

  <ClientProviders>
            <AuthGuard>
                <div className="flex flex-col items-center mx-auto w-full md:px-6 lg:px-10 xl:px-16">
                    <AccountNavbar />
                    <div aria-hidden="true" className="w-full">
                      <div className="hidden md:block max-w-5xl mx-auto px-6">
                        <div className="h-px bg-gradient-to-r from-transparent via-orange-200/40 to-transparent" />
                      </div>
                      <div className="md:hidden">
                       <div className="h-px bg-gradient-to-r from-transparent via-orange-200/40 to-transparent" />
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 items-center w-full ">
                        {children}
                    </div>
                </div>
            </AuthGuard>
        </ClientProviders>


and then in any of the childre components :

import { useAuth } from "@/firebase/authProvider";
const {user, profile, loading } = useAuth();