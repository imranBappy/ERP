import axios from "axios";
import { useForm } from "react-hook-form";

export default function Test() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        axios.post('/auth', data)
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) })
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input
                    {...register("email", { required: true })}
                    aria-invalid={errors.firstName ? "true" : "false"}
                />
                {errors.email?.type === 'required' && <p className="text-error" role="alert">Email is required</p>}

            </div>
            <br />
            <div>
                <input
                    {...register("password", { required: "Password  is required" })}
                    aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.password && <p role="alert" className="text-error">{errors.password?.message}</p>}

            </div>


            <input type="submit" />
        </form>
    );
}
