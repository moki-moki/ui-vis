export default function Home() {
    return (
        <main className="my-10 max-w-screen-2xl mx-auto font-[family-name:var(--font-geist-sans)]">
            <section className="flex gap-5 w-full justify-around">
                <div>
                    <h1 className="text-4xl text-primary-color">
                        <span className="text-stroke">Visualize</span> Your
                    </h1>
                    <h1 className="text-3xl">UI and UX</h1>
                    <h1 className="text-3xl">In Real Time</h1>
                </div>
                <div className="grid grid-cols-3">
                    <div className="h-full w-20 bg-secondary-color"></div>
                    <div className="h-full w-20 bg-test-color"></div>
                    <div className="h-full w-20 row-span-2 bg-accent-color"></div>
                    <div className="h-full w-full col-span-2 bg-primary-color"></div>
                </div>
            </section>
        </main>
    );
}
