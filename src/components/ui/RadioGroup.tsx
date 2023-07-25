import * as RadioGroupRadix from '@radix-ui/react-radio-group'

export function RadioGroup() {
  return (
    <RadioGroupRadix.Root
      className="flex flex-col gap-2.5"
      defaultValue="default"
    >
      <div className="flex items-center">
        <RadioGroupRadix.Item
          className="bg-white w-5 h-5 rounded-full border border-gray-300 cursor-default mr-1"
          value="default"
          id="r1"
        >
          <RadioGroupRadix.Indicator className="flex items-center justify-center w-full -h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-gray-900" />
        </RadioGroupRadix.Item>
        <label htmlFor="r1">Informar um link</label>
      </div>
    </RadioGroupRadix.Root>
  )
}
