import Button from './Button';

function Card({ title, description,actionText, onAction, extraButton }) {
  return (
    <div className="border rounded-lg shadow-lg p-4 max-w-sm">
      <img src="" alt={title} className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {actionText && <Button text={actionText} onClick={onAction} />}
      {extraButton}
    </div>
  );
}

export default Card;