import styles from './input.module.css';

export interface IInput extends React.HTMLProps<HTMLInputElement> {
	innerRef?: any;
	error?: boolean;
}
const Input: React.FC<IInput> = ({ className, placeholder, innerRef, error, ...props }) => {
	const classname = className + ' bg-transparent w-full focus:outline-none text-lg pb-1  px-2';
	console.log(error);
	return (
		<div className={`${styles.input} ${error ? 'border-pinkish' : 'border-gray-500'}`}>
			<label htmlFor={props.id || props.name} className="mb-0 block text-gray-500 pt-1 text-sm px-2">
				{placeholder}
			</label>
			<input ref={innerRef} id={props.id || props.name} {...props} className={classname} />
		</div>
	);
};

export default Input;
