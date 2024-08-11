async function getMessages(language: string) {
    const data = await fetch(`/messages/${language}.json`);

    if(!data) return null;

    return data.json();
}

export default getMessages;
