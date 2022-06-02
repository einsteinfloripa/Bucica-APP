const cpfs = ['11111111111', '99999999999'];

function verificarCPF(cpf) {
  let cpfValido = false;
  const formattedCpf = cpf.split('.').join('').split('-').join('');
  cpfs.forEach((element) => {
    if (element === formattedCpf) cpfValido = true;
  });
  return cpfValido ? { link: 'https://meet.google.com/tsu-ggvc-nzk' } : null;
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    const linkMeet = verificarCPF(req.body.cpf);
    if (linkMeet) {
      res.status(200).json(linkMeet);
      return;
    }
    res.status(404).json();
    return;
  } else {
  }
  res.status(400).json();
}
