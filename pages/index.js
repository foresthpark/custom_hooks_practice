import useInput from "./useInput";
import useFetch from "./useFetch";

export default function Home() {
  const tag = useInput("");
  const { responseData, loading, error } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}${tag.value}`
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input {...tag} placeholder="Search for a GIF" />
        <button type="submit">Search</button>
      </form>
      <br />
      {loading && "Loading your GIF..."}
      {!loading && error && "There was an error fetchng your GIF"}
      {!loading && responseData && <img src={responseData} />}
    </div>
  );
}
