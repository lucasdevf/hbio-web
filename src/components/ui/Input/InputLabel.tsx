interface Props {
  label: string
}

export function InputLabel({ label }: Props) {
  return <label className="mb-2 font-medium">{label}</label>
}
