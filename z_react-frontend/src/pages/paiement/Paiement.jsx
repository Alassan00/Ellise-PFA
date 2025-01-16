import { Link } from "react-router-dom"

const Paiement = () => {
    return (
        <div>
            <div className="px-20 pt-12">
                <div className="h-3 bg-indigo-900 shadow-lg rounded-t-lg"></div>
                <div className="bg-white rounded-b-xl mx-auto shadow-lg overflow-hidden">
                    <div className="py-6 px-12">
                        <h1 className=" text-3xl text-center font-sans font-semibold">Vous pouvez effectuer vos paiement en ligne via ces deux services</h1>
                        <div className="pt-16">


                            <div className="bg-white rounded-b-xl mx-auto shadow-lg shadow-teal-100 overflow-hidden">
                                <div className="py-6 px-12">
                                    <div className="flex flex-col lg:flex-row justify-evenly items-center pt-20 gap-y-10 lg:gap-y-0">
                                        <Link to={"/paiement_bankily/:id"}>
                                        <img
                                            src='/assets/img/bankily.png'
                                            alt="bankily"
                                            className="w-48 h-48 rounded-full"
                                        />
                                        </Link>
                                        <Link to={"/paiement_masravi/:id"}>
                                        <img
                                            src="/assets/img/masrvi.jpg"
                                            alt="masrvi"
                                            className="w-48 h-48 rounded-full"
                                        />
                                        </Link>
                                    </div>

                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paiement