/*  
  =================== DASHBOARD EXPLICADA ===================

  Este arquivo controla TUDO da página de alimentos.

  O que ele faz:
  • Mostra uma tabela com todos os alimentos disponíveis.
  • Se o usuário logado for AGRICULTOR → ele pode cadastrar, editar e remover.
  • Se o usuário logado for FAMÍLIA → ele pode demonstrar interesse (abrir um modal e ver endereço).

  Importante:
  • O tipo de usuário vem do localStorage (algo guardado no navegador).
  • Por enquanto os alimentos são mockados.
  • Quando tiver API, esta parte do código deve ser trocada pela chamada real.
  

  *** em fase final devemos trocar todos onde estiver o "mock"
*/


import { useEffect, useState } from "react";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const [userType, setUserType] = useState("");  // Guarda o tipo de usuário
    const [showModal, setShowModal] = useState(false);
    const [selectedAlimento, setSelectedAlimento] = useState(null); // Guarda o alimento

    // Lista inicial mock 
    const [alimentos, setAlimentos] = useState([         // Lista de alimentos MOCKADA
        { id: 1, nome: "Tomate", quantidade: 12, endereco: "Sítio Boa Esperança - KM 12", produtor: "João Silva" },
        { id: 2, nome: "Alface", quantidade: 25, endereco: "Chácara Verde Vida - KM 6", produtor: "Maria Souza" },
        { id: 3, nome: "Banana", quantidade: 40, endereco: "Fazenda Alto do Sol - KM 17", produtor: "Carlos Alves" },
    ]);

    useEffect(() => { //trocar essa lógica porca aqui
        const tipo = localStorage.getItem("userType");
        if (!tipo) {
            window.location.href = "/";
        } else {
            setUserType(tipo);
        }
    }, []);

    const abrirModalInteresse = (item) => {
        setSelectedAlimento(item);
        setShowModal(true);

        // Quando o usuário clicar "Demonstrar Interesse" função inicia e abre a Modal,
    };

    const fecharModal = () => {
        // fecha modal e limpa tudo.  Não deixa os dados presos  no selectAlimentos por favor
        setShowModal(false);
        setSelectedAlimento(null);
    };


    const cadastrarExcedente = () => {
        const nome = prompt("Nome do alimento:");
        const quantidade = prompt("Quantidade:");
        const endereco = prompt("Endereço de coleta:");
        if (!nome || !quantidade || !endereco) return alert("Preencha todos os campos!");
        const novoItem = {
            id: alimentos.length + 1,
            nome,
            quantidade: Number(quantidade),
            endereco,
            produtor: localStorage.getItem("userName") || "Produtor",
            criadoEm: new Date().toISOString(),
        };
        setAlimentos([...alimentos, novoItem]);

        /* fase 7 apenas por prompt.

    FUTURO:
         • Trocar esses prompt por modal ou paginas, pagina tvz ferre com o UX 
  
   Sempre validar os dados antes de salvar.
*/
    };

    // Futuramente adicionar mais funçoes de editar (Para agricultor)
    const editarAlimento = (item) => {
        const nome = prompt("Nome do alimento:", item.nome);
        const quantidade = prompt("Quantidade:", String(item.quantidade));
        const endereco = prompt("Endereço de coleta:", item.endereco);
        if (!nome || !quantidade || !endereco) return;
        setAlimentos(alimentos.map(a => a.id === item.id ? { ...a, nome, quantidade: Number(quantidade), endereco } : a));
    };

    const removerAlimento = (id) => {
        if (!confirm("Remover alimento?")) return; // - Só remove local,
        setAlimentos(alimentos.filter(a => a.id !== id));

    };

    const confirmarInteresse = () => {
        alert("Interesse registrado! (mock)");
        fecharModal();

        // familia confirma ---> Avisa Agricultor ||||||| no sonho bom da pra usar o N8N e fazer tudo automatizado
    };

    return (
        <div style={{ padding: "20px" }}> {/* Cabeçalho verde da página */}
            <header className="dashboard-header">
                <h2 style={{ margin: 0 }}>Área – {userType === "agricultor" ? "Agricultor" : "Família"}</h2>
                <Link to="/home" className="btn-voltar-home">Voltar para Home</Link>


            </header>

            <section style={{ marginTop: "20px" }}>
                {userType === "agricultor" && (
                    <button
                        style={{ marginBottom: "15px" }}
                        onClick={cadastrarExcedente}
                        className="btn-primary"
                    >
                        + Cadastrar Excedente
                    </button>
                )}

                <h3>Alimentos Disponíveis</h3>

                <table className="table-custom"> {/* Tabela com lista de alimentos */}
                    <thead>
                        <tr>
                            <th>Alimento</th>
                            <th>Quantidade</th>
                            <th>Produtor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alimentos.map((item) => (
                            <tr key={item.id}>
                                <td>{item.nome}</td>
                                <td>{item.quantidade}</td>
                                <td>{item.produtor}</td>
                                <td>
                                    {userType === "familia" && (
                                        <button className="btn-primary-small" onClick={() => abrirModalInteresse(item)}>
                                            Demonstrar Interesse
                                        </button>
                                    )}
                                    {userType === "agricultor" && (
                                        <>
                                            <button className="btn-outline" onClick={() => editarAlimento(item)}>Editar</button>
                                            <button className="btn-danger" onClick={() => removerAlimento(item.id)}>Remover</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {showModal && selectedAlimento && (
                <div className="modal-overlay" onClick={fecharModal}>
                    <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                        <h4>Endereço de Coleta</h4>
                        <p><strong>Alimento:</strong> {selectedAlimento.nome}</p>
                        <p><strong>Produtor:</strong> {selectedAlimento.produtor}</p>
                        <p><strong>Endereço:</strong> {selectedAlimento.endereco}</p>

                        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                            <button className="btn-outline" onClick={fecharModal}>Fechar</button>
                            <button className="btn-primary" onClick={confirmarInteresse}>Confirmar interesse</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
