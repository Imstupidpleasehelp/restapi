// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const getData = async (name) => {
  try {
    const data = await fetch(`https://api.github.com/users/${name}`);
    console.log(data.json());
    return data;
  } catch (e) {
    console.log("There was an error fetching the data: " + error)
  }
}