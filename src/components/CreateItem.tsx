import {useState, forwardRef, useEffect} from 'react';
import {Button} from '@mui/material';
import {files} from "../assets/files.ts";
import {Animal, File} from "../interfaces/catalog.interface.ts";

interface AnimalFormDialogProps {
    onSubmit: (values: Animal) => void;
    onCancel: () => void;
    editingItem: Animal
}

const CreateItem = forwardRef<HTMLDialogElement, AnimalFormDialogProps>(({onSubmit, onCancel, editingItem}, ref) => {
    const [values, setValues] = useState<Animal>({
        id: '',
        name: '',
        species: '',
        family: '',
        habitat: '',
        placeOfFound: '',
        diet: '',
        description: '',
        weightKg: 0,
        heightCm: 0,
        image: '',
    });

    useEffect(() => {
        if (editingItem) {
            setValues({
                id: editingItem.id || '',
                name: editingItem.name || '',
                species: editingItem.species || '',
                family: editingItem.family || '',
                habitat: editingItem.habitat || '',
                placeOfFound: editingItem.placeOfFound || '',
                diet: editingItem.diet || '',
                description: editingItem.description || '',
                weightKg: editingItem.weightKg || 0,
                heightCm: editingItem.heightCm || 0,
                image: editingItem.image || '',
            });
        }
    }, [editingItem]);

    const onChange = (event: any) => {
        setValues({...values, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        onSubmit(values);
    };

    return (
        <dialog ref={ref} className="modal bg-white rounded-lg p-6 w-full max-w-2xl" id="modal">
            <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mt-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="name">
                            Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="name" type="text" value={values.name} onChange={onChange} name='name'
                            placeholder="name" required
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mt-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="species">
                            Species
                        </label>
                        <select
                            id="species"
                            name="species"
                            value={values.species}
                            onChange={onChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            required>
                            <option>none</option>
                            <option value="dog">dog</option>
                            <option value="cat">cat</option>
                            <option value="bird">bird</option>
                        </select>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mt-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="family">
                            Family
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="family" type="text" value={values.family} onChange={onChange} name='family'
                            placeholder="family"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mt-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="habitat">
                            Habitat
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="habitat" type="text" value={values.habitat} onChange={onChange} name='habitat'
                            placeholder="habitat"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mt-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="placeOfFound">
                            Place Of Found
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="placeOfFound" type="text" value={values.placeOfFound} onChange={onChange}
                            name='placeOfFound'
                            placeholder="placeOfFound"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mt-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="diet">
                            Diet
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="diet" type="text" value={values.diet} onChange={onChange} name='diet' placeholder="diet"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mt-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="description">
                            Description
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="description" type="text" value={values.description} onChange={onChange}
                            name='description'
                            placeholder="description"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mt-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="weightKg">
                            Weight kg
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="weightKg" type='number' value={values.weightKg} onChange={onChange} name='weightKg'
                            placeholder="weightKg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mt-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="heightCm">
                            Height cm
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="heightCm" type='number' value={values.heightCm} onChange={onChange} name='heightCm'
                            placeholder="heightCm"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mt-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="image">
                            image
                        </label>
                        <select
                            id="image"
                            name="image"
                            value={values.image}
                            onChange={onChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            required>
                            <option>none</option>
                            {files.map((file: File) => (
                                    <option key={file.imgName} value={file.link}>{file.imgName}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex justify-center items-center space-x-4">
                    <Button onClick={onCancel}>
                        <i className='bi bi-plus-square'></i> Cancel
                    </Button>
                    <Button type='submit' variant="contained">
                        <i className='bi bi-plus-square'></i> Save
                    </Button>
                </div>
            </form>
        </dialog>
    );
});

export default CreateItem;
