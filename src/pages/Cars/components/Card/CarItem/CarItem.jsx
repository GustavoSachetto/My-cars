import { GiGearStickPattern } from "react-icons/gi"
import { MdOutlineDoorSliding } from "react-icons/md"
import { IoInformationCircleOutline } from "react-icons/io5"
import { PiCarProfile } from "react-icons/pi"
import { TbEngine } from "react-icons/tb"
import { LuFuel } from "react-icons/lu"
import Carousel from "../../Carousel/Carousel"
import styles from "./CarItem.module.css"

export default function CarItem({ car }) {

  function formatterBool(value) {
    return value === true ? "Sim" : "Não"
  }

  return (
    <section className={"border-0 rounded-4 shadow-sm mb-5 "+`${styles.car_item}`}>
      <Carousel images={car.images} />
      <div className={styles.card_information}>
        <h5 className="fs-3 fw-semibold">{car.brand_name +" "+ car.model_name}</h5>
        <h6 className="fs-5 mb-4 fw-normal">{car.version}</h6>
        <h3 className="fs-1 text-success fw-medium mb-3">
          <span>{car.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
        </h3>

        <div className="mb-3">
          <span className="fw-normal">Ano: produção | lançamento</span>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item px-5 fs-6">
              <span>{car.year.production}</span>
            </li>
            <li className="list-group-item px-5 fs-6">
              <span>{car.year.release}</span>
            </li>
          </ul>
        </div>

        <div className="mb-3">
          <span className="fw-semibold">Informações</span>
          <ul className="list-group mt-2">
            <li className="list-group-item">
              <GiGearStickPattern size={21} />
              <span className="ms-1"> Câmbio: <strong>{car.transmission_name}</strong></span>
            </li>
            <li className="list-group-item">
              <MdOutlineDoorSliding size={21} />
              <span className="ms-1"> Portas: <strong>{car.doors}</strong></span>
            </li>
            <li className="list-group-item">
              <TbEngine size={21} />
              <span className="ms-1"> Motor: <strong>{car.motor}</strong></span>
            </li>
            <li className="list-group-item">
              <PiCarProfile size={21} />
              <span className="ms-1"> Carroceria: <strong>{car.bodywork}</strong></span>
            </li>
            <li className="list-group-item">
              <LuFuel size={21} />
              <span className="ms-1"> Combustível: <strong>{car.fuel_name}</strong></span>
            </li>
          </ul>
        </div>

        <span className="fw-semibold">Informações específicas</span>
        <div className="d-flex mt-2">

          <div className="me-2">
            <button type="button" className="btn btn-primary px-2" data-bs-toggle="modal" data-bs-target="#comfort">
              <span>
                Conforto <IoInformationCircleOutline size={20} />
              </span>
            </button>
            <div className="modal fade" id="comfort" tabIndex="-1" aria-labelledby="comfortLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="comfortLabel">Características de conforto:</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <ul className="list-group mt-2">
                      <li className="list-group-item">
                        <span>Piloto automático: <strong>{formatterBool(car.comfort.automatic_pilot)}</strong></span>  
                      </li>
                      <li className="list-group-item">
                        <span>Ar-condicionado: <strong>{formatterBool(car.comfort.air_conditioner)}</strong></span>  
                      </li>
                      <li className="list-group-item">
                        <span>Vidro automático: <strong>{formatterBool(car.comfort.automatic_glass)}</strong></span>  
                      </li>
                    </ul>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#entertainment">
              Entretenimento  <IoInformationCircleOutline size={20} />
            </button>
            <div className="modal fade" id="entertainment" tabIndex="-1" aria-labelledby="entertainmentLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="entertainmentLabel">Características de entretenimento:</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <ul className="list-group mt-2">
                      <li className="list-group-item">
                        <span>Rádio AM/FM: <strong>{formatterBool(car.entertainment.am_fm)}</strong></span>  
                      </li>
                      <li className="list-group-item">
                        <span>Entrada auxiliar: <strong>{formatterBool(car.entertainment.auxiliary_input)}</strong></span>  
                      </li>
                      <li className="list-group-item">
                        <span>Bluetooth: <strong>{formatterBool(car.entertainment.bluetooth)}</strong></span>  
                      </li>
                      <li className="list-group-item">
                        <span>CD Player: <strong>{formatterBool(car.entertainment.cd_player)}</strong></span>  
                      </li>
                      <li className="list-group-item">
                        <span>DVD Player: <strong>{formatterBool(car.entertainment.dvd_player)}</strong></span>  
                      </li>
                      <li className="list-group-item">
                        <span>Entrada USB: <strong>{formatterBool(car.entertainment.usb_port)}</strong></span>  
                      </li>
                      <li className="list-group-item">
                        <span>Leitor MP3: <strong>{formatterBool(car.entertainment.mp3_reader)}</strong></span>  
                      </li>
                    </ul>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}