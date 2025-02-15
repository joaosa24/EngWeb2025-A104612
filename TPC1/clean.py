import json

def open_json(filename):
    with open(filename, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data

def save_json(data, filename):
    with open(filename, 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=4)

def extract_intervencoes_viaturas(data):
    intervencoes = []
    viaturas = []
    intervencoes_codigos = set()  # Conjunto para armazenar os códigos das intervenções já adicionadas

    for reparacao in data.get("reparacoes", []):
        viaturas.append(reparacao["viatura"])
        for intervencao in reparacao["intervencoes"]:
            if intervencao["codigo"] not in intervencoes_codigos:  # Verifica se o código já foi adicionado
                intervencoes.append(intervencao)
                intervencoes_codigos.add(intervencao["codigo"])  # Adiciona o código ao conjunto

    return {"intervencoes": intervencoes, "viaturas": viaturas}

def main():
    original_data = open_json("dataset_reparacoes.json")

    if original_data is not None:
        new_data = extract_intervencoes_viaturas(original_data)
        original_data["intervencoes"] = new_data["intervencoes"]
        original_data["viaturas"] = new_data["viaturas"]
        save_json(original_data, "new_dataset.json")

if __name__ == "__main__":
    main()