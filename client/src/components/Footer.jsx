import { Link } from "react-router-dom"

export default function Footer(){


    return(
        <div className="Footer bg-gray-900 w-full flex absolute bottom-0 justify-around underline text-sm visited:text-white hover:text-orange-600">
            <Link className="py-3 px-1 text-white hover:text-orange-600">Conditions générales de vente</Link>
            <Link className="p-3 text-white hover:text-orange-600">Politique de confidentialité</Link>
            <Link className="p-3 text-white hover:text-orange-600">Conditions d'achat</Link>
        </div>
    )
}