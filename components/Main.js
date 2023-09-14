import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useCallback, useEffect, useRef, useState } from "react";
import Modal from "./Modal";

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting)
    } 
    );
    
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, []);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default function Main() {
  const supabase = createClientComponentClient();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    showModal: false,
    error: false,
    errorMessage: "Vérifiez votre connexion internet.",
  });
  //refs
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);
  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);
  const ref5 = useRef();
  const isVisible5 = useIsVisible(ref5);
  const ref6 = useRef();
  const isVisible6 = useIsVisible(ref6);
  const ref7 = useRef();
  const isVisible7 = useIsVisible(ref7);
  const ref8 = useRef();
  const isVisible8 = useIsVisible(ref8);
  const ref9 = useRef();
  const isVisible9 = useIsVisible(ref9);
//end refs
  const advantages = ["faciles", "sécurisées", "moins chères"];
  const [currentAdvantage, setCurrentAdvantage] = useState(advantages[0])

  var counter = 0;
  
    useInterval(()=>{
      if(counter==advantages.length) counter=0;
      setCurrentAdvantage(advantages[counter]);
      //console.log(counter)
      counter++;
    }, 1500);

  const [role, setRole]= useState("locataire");

  const handleChange = e => {
    const key = e.target.name;
    const value = e.target.value;
    setState(prev => {
      return { ...prev, [key]: value, error: false };
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(state);
    //alert("Submitted");
    setLoading(true);
    const { data, error } = await supabase
      .from('facebook_surveys')
      .insert([
        { full_name: state.name, email: state.email, phone: state.phone, message: state.message, role: role },
      ])
      .select();
      setLoading(false);
    if (error == null) {
      if (data.length == 1) {
        if (data[0]["full_name"] == state.name) {
          setState(prev => {
            return { ...prev, showModal: true, name: "", email: "", phone: "", message: "" }
          });
        }
      }
    }
    else if (error.code == "23505") {
      setState(prev => {
        return { ...prev, error: true, errorMessage: "Vous êtes déjà enregistrés." }
      });
    }
    else {
      setState(prev => {
        return { ...prev, error: true, errorMessage: "Vérifiez votre connexion internet." }
      });
    }
    //console.log(data)

  };

  return (
    <section className="text-gray-600 dark:bg-neutral-950 dark:text-white body-font">
      {state.showModal ? <Modal onDismiss={() => setState(
        prev => {
        return { ...prev, showModal: false }
      })} /> : null}
      <div ref={ref1} className={"max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center transition-transform ease-out duration-1000 "+(isVisible1 ? "translate-y-0": "translate-y-12")}>
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center animate-fade-right">
          <h1 className="mb-5 dark:text-gray-100 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
            Nous rendons les recherches de maison <span className="inline-block animate-fade-up animate-infinite animate-ease-out animate-duration-[1500] text-red-900 transition-all ">{currentAdvantage}</span>.
          </h1>
          <p ref={ref2} className={"mb-4 xl:w-3/4 text-gray-600 dark:text-gray-200 text-lg transition-transform ease-out duration-1000 "+(isVisible2 ? "translate-y-0": "translate-y-12")} >
            Hostmi est une application mobile entièrement burkinabé qui vous permettra de rechercher des maisons à louer partout au Burkina Faso et en Afrique sans vous déplacer.
          </p>
          <div ref={ref3} className={"flex justify-center transition-transform ease-out duration-1000 "+(isVisible3 ? "translate-y-0": "translate-y-12")}>
            <a
              className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-out-out transform border rounded-lg bg-red-900"
              href="#register"
            >
              <span className="justify-center">S&#39;inscrire pour le test</span>
            </a>
          </div>
        </div>
        <div ref={ref4} className={"xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10 transition-transform ease-out duration-1000 "+(isVisible4 ? "translate-y-0": "translate-y-12")}>
          <img
            className="w-94 md:ml-1 ml-24"
            alt="iPhone-12"
            src="/images/iphone.png"
          />
        </div>
      </div>

      <section className="mx-auto">
        <div ref={ref5} className={"flex flex-col gap-5 w-full mb-4 text-left lg:text-center transition-transform ease-out duration-1000 "+(isVisible5 ? "translate-y-0": "translate-y-12")}>
          <h1 ref={ref5} className={"mb-8 text-6xl text-center Avenir font-semibold text-red-900 "}>
            Pourquoi nous ?
          </h1>
        </div>
        <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row md:justify-evenly flex-col items-center animate-fade-up">
          <div ref={ref6} className={"max-w-sm my-5 rounded overflow-hidden shadow-lg transition-transform ease-out duration-1000 "+(isVisible6 ? "translate-y-0": "translate-y-12")}>
            <img className="w-full" src="./images/real-estate-agent.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-orange-600">HostMI pour les  promoteurs immobiliers</div>
              <div>
                <ul role="list" className="list-disc dark:text-gray-400 text-gray-700 text-base pl-4">
                  <li>Publiez en 2 clics</li>
                  <li>Louer rapidement</li>
                  <li>Des locataires dignes de confiance</li>
                  <li>Gagner du temps</li>
                  <li>Economisez jusqu&#39;à 80%</li>
                </ul>
              </div>
            </div>
            <div className="px-6 pt-4 pb-4">
            <a className="inline-block bg-orange-600 text-white rounded-md px-3 py-1 text-sm font-semibold mr-2 mb-2" onClick={()=>setRole("promoteur")} href="#register">S&#39;inscrire en tant que promoteur immobilier</a>
            </div>
          </div>
          <div ref={ref7} className={"max-w-sm my-5 rounded overflow-hidden shadow-lg transition-transform ease-out duration-1000 "+(isVisible7 ? "translate-y-0": "translate-y-12")}>
            <img className="w-full" src="./images/locataire.avif" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-blue-600">HostMI pour les locataires</div>
              <div>
                <ul role="list" className="list-disc dark:text-gray-400 text-gray-700 text-base pl-4">
                  <li>Une large sélection de maisons</li>
                  <li>Éviter les visites inutiles</li>
                  <li>Éviter l&#39;errance</li>
                  <li>Une maison en un jour</li>
                  <li>Economisez jusqu&#39;à 90%</li>
                </ul>
              </div>
            </div>
            <div className="px-6 pt-4 pb-4">
              <a onClick={()=>setRole("locataire")} href="#register" className="inline-block bg-blue-600 text-white rounded-md px-3 py-1 text-sm font-semibold mr-2 mb-2">S&#39;inscrire en tant que locataire</a>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref8} className={"mx-auto transition-transform ease-out duration-1000 "+(isVisible8 ? "translate-y-0": "translate-y-12")}>
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="flex flex-col w-full mb-4 text-left lg:text-center">
            <h1 className="mb-8 text-2xl Avenir font-semibold dark:text-gray-200 text-black">
              Entreprises Partenaires
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
            <div className="flex items-center justify-center">
              <img
                src="./images/Sternstewart-Logo.png"
                alt="Sternstewart Logo"
                className="block object-contain h-16"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="./images/bit.png"
                alt="Bit Logo"
                className="block object-contain h-16"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/Google-Logo.webp"
                alt="Google Logo"
                className="block object-contain h-16"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/Cloudflare-Logo.svg"
                alt="Cloudflare Logo"
                className="block object-contain h-16"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <div className="grr max-w-7xl pt-20 mx-auto text-center">
        <h1 ref={ref9} className={"mb-8 text-6xl Avenir font-semibold dark:text-gray-200 text-gray-900 transition-transform ease-out duration-1000 "+(isVisible9 ? "translate-y-0": "translate-y-12")}>
          Accomplir plus, avec moins d&#39;effort.
        </h1>
        <h1 className="mb-8 text-2xl Avenir font-semibold dark:text-gray-400 text-gray-600 text-center">
          Evitez les deplacements inutiles et coûteux. Traitez avec des gens de confiance.
        </h1>
        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
          <img
            className="object-cover object-center w-3/4 mb-10 g327 rounded-lg shadow-lg"
            alt="Placeholder Image"
            src="./images/look_on_phone.jpg"
          ></img>
        </div>
      </div>
      <section className="relative" id="register">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-6xl Avenir font-semibold dark:text-gray-200 text-gray-900">
              Inscrivez vous pour le test
            </h1>
            <h1 className="mb-9 text-2xl font-semibold dark:text-gray-400 text-gray-600">
              Obtenez des bonus exclusifs en faisant partie des premiers utilisateurs de notre application.
            </h1>
            <div className="py-8 lg:py-16 px-4 mx-auto bg-transparent rounded-md max-w-screen-md">
              <form onSubmit={handleSubmit} action="#" className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-start mb-2 font-medium dark:text-gray-200 text-gray-900 ">Votre nom complet <span className="text-red-500">*</span></label>
                  <input onChange={handleChange} value={state.name} type="text" id="name" name="name" className="w-full p-3 border border-gray-600 pr-2 pl-2 py-3 mt-2 rounded-md dark:bg-neutral-800 dark:text-gray-200 text-gray-800 font-semibold hover:border-gray-900" placeholder="Nom et prénom(s)" required>
                  </input>
                </div>
                <div>
                  <label htmlFor="email" className="block text-start mb-2 font-medium dark:text-gray-200 text-gray-900 ">Votre email <span className="text-red-500">*</span></label>
                  <input onChange={handleChange} value={state.email} type="email" id="email" name="email" className="w-full p-3 border border-gray-600 pr-2 pl-2 py-3 mt-2 rounded-md dark:bg-neutral-800 dark:text-gray-200 text-gray-800 font-semibold hover:border-gray-900" placeholder="utilistateur@gmail.com" required>
                  </input>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-start mb-2 font-medium dark:text-gray-200 text-gray-900 ">Votre numéro WhatsApp <span className="text-red-500">*</span></label>
                  <input onChange={handleChange} value={state.phone} name="phone" type="text" id="phone" className="block p-3 w-full border border-gray-600 pr-2 pl-2 py-3 mt-2 rounded-md dark:bg-neutral-800 dark:text-gray-200 text-gray-800 font-semibold hover:border-gray-900" placeholder="+22664260325" required>
                  </input>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-start mb-2 font-medium dark:text-gray-200 text-gray-900 ">Nous laisser un message (facultatif)</label>
                  <textarea onChange={handleChange} value={state.message} name="message" id="message" rows="6" className="block p-2.5 w-full border border-gray-600 pr-2 pl-2 py-3 mt-2 rounded-md dark:bg-neutral-800 dark:text-gray-200 text-gray-800 font-semibold hover:border-gray-900 " placeholder="Votre message...."></textarea>
                </div>
                <div>
                <label htmlFor="message" className="block text-start mb-2 font-medium dark:text-gray-200 text-gray-900 ">Dans quel cas êtes vous ?</label>
                <div className="flex md:flex-row flex-col">
                  <div className="p-2">
                  <div onClick={()=>setRole("promoteur")} className={"cursor-pointer max-w-sm px-8 py-4 bg-gray-200 dark:bg-neutral-800 dark:text-gray-200 mr-auto rounded-md "+ (role!="locataire" ? "border border-orange-600": "")}>Je suis promoteur immobilier</div>
                  </div>
                  <div className="p-2">
                  <div onClick={()=>setRole("locataire")} className={"cursor-pointer max-w-sm px-8 py-4 bg-gray-200 dark:bg-neutral-800 dark:text-gray-200 mr-auto rounded-md "+ (role=="locataire" ? "border border-blue-600": "")}>Je suis locataire</div>
                  </div>
                </div>
                </div>
                {state.error ? <div className="w-full bg-red-100">
                  <div className="p-2">
                    <div className="flex">
                      <div className="w-5 h-5 text-red-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="nz sb aza">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <div className="text-left pl-5">
                        <h3 className="mb-2 text-red-700">Erreur</h3>
                        <ul role="list" className="list-disc text-red-500">
                          <li>{state.errorMessage}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> : null}
                <button
                  disabled={loading}
                  className={"inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-out-out transform border rounded-lg "+ (loading ?  "bg-red-200" : "bg-red-900")}

                >
                  <span className="justify-center">{loading ? "Enregistrement en cours..." : "Valider"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
