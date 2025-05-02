const FormField: React.FC<{
  label: string;
  id: string;
  type?: string;
  register: any;
  errors: any;
  placeholder: string;
  validation?: any;
  isTextarea?: boolean;
}> = ({
  label,
  id,
  type = "text",
  register,
  errors,
  placeholder,
  validation,
  isTextarea = false,
}) => (
  <div className="group">
    <label
      htmlFor={id}
      className="block text-lg sm:text-lg font-medium text-gray-700 mb-2 group-hover:text-[var(--primary-blue)] transition-colors duration-200"
    >
      {label}
    </label>
    {isTextarea ? (
      <textarea
        id={id}
        rows={4}
        {...register(id, validation)}
        className="w-full px-4 py-3 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm hover:bg-white/80 focus:bg-white resize-none text-sm sm:text-base"
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        id={id}
        {...register(id, validation)}
        className="w-full px-4 py-3 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm hover:bg-white/80 focus:bg-white text-sm sm:text-base"
        placeholder={placeholder}
      />
    )}
    {errors[id] && (
      <p className="text-red-500 text-sm mt-1">{errors[id].message}</p>
    )}
  </div>
);

export default FormField;
