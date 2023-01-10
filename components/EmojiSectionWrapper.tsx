export default function EmojiSectionWrapper(props) {
  return (
    <div className="flex flex-row w-full space-x-2 text-lg">
      {props.children}
    </div>
  );
}
