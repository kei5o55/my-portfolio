type Props = {
    params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props){
    const {id}=await params;

    return(
        <main>
            <div>test {id}</div>
        </main>
    );
}