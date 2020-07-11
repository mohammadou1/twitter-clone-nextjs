import styles from './input.module.css';

export type ISelectOption = {
	label: string | React.ReactNode | number;
	value: string | number;
};

export type IInput = {
	innerRef?: any;
	error?: boolean;
	type?: 'select' | 'text' | 'number' | 'password' | 'date' | 'time' | 'email';
	options?: ISelectOption[];
} & React.InputHTMLAttributes<HTMLInputElement> &
	React.InputHTMLAttributes<HTMLSelectElement>;

// If you want to use it as select, pass type select
const Input: React.FC<IInput> = ({
	className,
	placeholder,
	type = 'text',
	options = [],
	innerRef,
	error,
	...props
}) => {
	const classname =
		className +
		' bg-transparent w-full focus:outline-none text-white bg-dark-lighter text-lg pb-1  px-2';
	return (
		<div className={`${styles.input} ${error ? 'border-pinkish' : 'border-gray-500'}`}>
			<label
				htmlFor={props.id || props.name}
				className={`mb-0 block pt-1 text-sm px-2 ${error ? 'text-pinkish' : 'text-gray-500'}`}>
				{placeholder}
			</label>
			{type !== 'select' ? (
				<input ref={innerRef} id={props.id || props.name} {...props} className={classname} />
			) : (
				<select ref={innerRef} id={props.id || props.name} {...props} className={classname}>
					{options.map((option, idx) => (
						<option key={idx} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			)}
		</div>
	);
};

export default Input;
