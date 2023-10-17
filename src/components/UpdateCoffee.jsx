import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updatedCoffee);

        // send data to the server 
        fetch(`https://coffee-store-server-ltlviwibu-julfiker-alis-projects.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {

                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }


    return (
        <div className="bg-[#F4F3F0] p-24 text-purple-800">
            <h2 className="mb-10 text-3xl text-center text-purple-800 font-extrabold">Update Coffee: {name}</h2>

            <form onSubmit={handleUpdateCoffee}>
                {/* row-1: Name & Quantity */}
                <div className="md:flex gap-5 mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-purple-800">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered bg-white w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-purple-800">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full bg-white" />
                        </label>
                    </div>
                </div>
                {/* row-2: Supplier & Test */}
                <div className="md:flex gap-5 mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-purple-800">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered bg-white w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-purple-800">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full bg-white" />
                        </label>
                    </div>
                </div>
                {/* row-3: Category & Details */}
                <div className="md:flex gap-5 mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-purple-800">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered bg-white w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-purple-800">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full bg-white" />
                        </label>
                    </div>
                </div>
                {/* row-4: Photo */}
                <div className="mb-5">
                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text text-purple-800">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered bg-white w-full" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block text-yellow-100 font-semibold bg-purple-800" type="submit" value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;