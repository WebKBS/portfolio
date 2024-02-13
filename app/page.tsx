const getData = async () => {
  const response = await fetch(
    'https://github.com/WebKBS/GitBookDocker/raw/main/docker-image.md'
  );
  const data = await response.text();

  return data;
};

export default async function Home() {
  const rawHTML = await getData();

  console.log(rawHTML);
  return (
    <>
      <main
        className="whitespace-pre-line"
        dangerouslySetInnerHTML={{ __html: rawHTML }}
      ></main>
    </>
  );
}
