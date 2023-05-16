import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const FavoriteFoodEnum = z.enum([
	"🍔 Burger",
	"🍕 Pizza",
	"🌭 Hotdog",
	"🌮 Taco",
	"🍣 Sushi",
]);

const favFoodFormSchema = z.object({
	favoriteFood: FavoriteFoodEnum,
	description: z.string().nonempty(),
});
// Exported to use in src/app/page.tsx
export type FavFoodFormType = z.infer<typeof favFoodFormSchema>;

type FavFoodFormProps = {
	onSubmit: (data: FavFoodFormType) => void;
};

const FavFoodForm: React.FC<FavFoodFormProps> = ({ onSubmit }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<FavFoodFormType>({
		// Specify FavFoodForm as generic type
		resolver: zodResolver(favFoodFormSchema),
	});

	const submitHandler = (data: FavFoodFormType) => {
		onSubmit(data);
	};

	return (
		<form
			onSubmit={handleSubmit(submitHandler)}
			className="w-full max-w-md space-y-8"
		>
			<div>
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Select Your Favorite Food
				</h2>
			</div>
			<div>
				<label htmlFor="favoriteFood" className="sr-only">
					Favorite Food
				</label>
				<Controller
					render={({ field }) => (
						<select
							{...field}
							className="w-full py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
						>
							<option disabled>Select your favorite food</option>
							{FavoriteFoodEnum.options.map((food) => (
								<option key={food} value={food}>
									{food}
								</option>
							))}
						</select>
					)}
					name="favoriteFood"
					control={control}
				/>
				{errors.favoriteFood && (
					<p className="text-red-600">This field is required</p>
				)}
			</div>
			<div>
				<label htmlFor="description" className="sr-only">
					Description
				</label>
				<textarea
					{...register("description")}
					className="w-full py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
					placeholder="Why do you like it?"
				/>
				{errors.description && (
					<p className="text-red-600">This field is required</p>
				)}
			</div>
			<div>
				<button
					type="submit"
					className="group w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Submit
				</button>
			</div>
		</form>
	);
};

export default FavFoodForm;
