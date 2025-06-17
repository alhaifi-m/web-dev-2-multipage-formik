'use client'
import { FormProvider } from "./FormContext"

export default function Layout({ children }) {
    return (

        <main className="max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow bg-white">
            <FormProvider>
                {children}
            </FormProvider>
        </main>
    )
}