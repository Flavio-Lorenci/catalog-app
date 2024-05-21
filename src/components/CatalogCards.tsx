
import Card from './Card.tsx';
import {Animal} from "../interfaces/catalog.interface.ts";



function CatalogCards({ catalog }: any) {
    return (
        <section className='bg-blue-50 px-4 py-10'>
            <div className='container-xl lg:container m-auto'>
                {catalog.length === 0 ? (
                    <p>No animal found!</p>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {catalog.map((animal: Animal) => (
                            <Card key={animal.name} animal={animal} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
export default CatalogCards;