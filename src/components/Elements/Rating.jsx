export const Rating = ({ rating }) => {
  let RatingArray = Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    RatingArray[i] = true;
  }
  <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>;
  return (
    <>
      {RatingArray.map((value,i) =>
        ( value ? (
          <i key={i} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
        ) : (
          <i key={i} className="text-lg bi bi-star text-yellow-500 mr-1"></i>
        ) )
      )}
    </>
  );
};
