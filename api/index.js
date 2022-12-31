export default async function handler(req, res) {
  const { body } = req;

  const result = body.strings.map(s => {
    return {
      id: s.identifier,
      text: s.translations[body.languageId].text
    }
  })

  return res.send(result);
}
