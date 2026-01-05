import { FormFieldProps } from "@/lib/types";

const FormField: React.FC<FormFieldProps> = ({
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
      className="block text-base sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-[#FFB647] transition-colors duration-200"
    >
      {label}
    </label>
    {isTextarea ? (
      <textarea
        id={id}
        rows={4}
        {...register(id, validation)}
        className="w-full px-4 py-3 sm:py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#FFB647] focus:border-[#FFB647] transition-all duration-200 bg-white hover:bg-gray-50 focus:bg-white resize-none text-sm sm:text-base"
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        id={id}
        {...register(id, validation)}
        className="w-full px-4 py-3 sm:py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#FFB647] focus:border-[#FFB647] transition-all duration-200 bg-white hover:bg-gray-50 focus:bg-white text-sm sm:text-base"
        placeholder={placeholder}
      />
    )}
    {errors[id] && (
      <p className="text-red-500 text-sm mt-1">{errors[id]?.message}</p>
    )}
  </div>
);

export default FormField;
