const Card = ({ id, name, status, species, gender, origin, image, onClose }) => {
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         <h2>Name: {name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         <img src={image} alt={name} />
      </div>
   );
}

export default Card;