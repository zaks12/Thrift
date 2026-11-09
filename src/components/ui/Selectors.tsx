export function SizeSelector({
  sizes,
  selected,
  onSelect,
  disabled,
}: {
  sizes: string[];
  selected: string;
  onSelect: (size: string) => void;
  disabled?: boolean;
}) {
  return (
    <div>
      <label className="text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)]/70 mb-2.5 block">
        Size {selected && <span className="text-[var(--color-charcoal)] font-medium ml-1">{selected}</span>}
      </label>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(size)}
            className={`min-w-[44px] h-11 px-3 text-sm tracking-wide border transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-charcoal)] ${
              selected === size
                ? 'border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-[var(--color-ivory)]'
                : 'border-[var(--color-stone)] text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)]'
            }`}
            aria-pressed={selected === size}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export function QuantitySelector({
  quantity,
  onChange,
  max,
  disabled,
}: {
  quantity: number;
  onChange: (q: number) => void;
  max: number;
  disabled?: boolean;
}) {
  return (
    <div>
      <label className="text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)]/70 mb-2.5 block">
        Quantity
      </label>
      <div className="flex items-center border border-[var(--color-stone)] w-fit">
        <button
          type="button"
          disabled={disabled || quantity <= 1}
          onClick={() => onChange(quantity - 1)}
          className="w-11 h-11 flex items-center justify-center text-[var(--color-charcoal)] hover:bg-[var(--color-cream)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label="Decrease quantity"
        >
          <span aria-hidden="true">&minus;</span>
        </button>
        <span className="w-12 text-center text-sm font-medium" aria-live="polite">
          {quantity}
        </span>
        <button
          type="button"
          disabled={disabled || quantity >= max}
          onClick={() => onChange(quantity + 1)}
          className="w-11 h-11 flex items-center justify-center text-[var(--color-charcoal)] hover:bg-[var(--color-cream)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label="Increase quantity"
        >
          <span aria-hidden="true">+</span>
        </button>
      </div>
      {max <= 5 && max > 0 && (
        <p className="text-xs text-[var(--color-taupe)] mt-1.5">
          Only {max} available
        </p>
      )}
    </div>
  );
}
