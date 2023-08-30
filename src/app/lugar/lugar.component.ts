import { Component, Inject, OnInit } from '@angular/core';
import { Lugar } from '../class/lugar';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent implements OnInit{
titulo: string = "vacio";
imagen: string = '../../assets/img/plaza.jpg';
descripcion: string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel nisi itaque ducimus, voluptates minima impedit sed accusamus est incidunt aliquam doloremque sequi officiis culpa recusandae a ex animi? Deserunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel nisi itaque ducimus, voluptates minima impedit sed accusamus est incidunt aliquam doloremque sequi officiis culpa recusandae a ex animi? Deserunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel nisi itaque ducimus, voluptates minima impedit sed accusamus est incidunt aliquam doloremque sequi officiis culpa recusandae a ex animi? Deserunt!"
lugarGuardadoJSON: any ="20";
lugarGuardado: any;
lugares: Lugar[]=[];
constructor(){
  this.lugares.push(new Lugar(
    "Comunidad Nativa ASHANINKA SANKIROSHI",
    "../../../assets/img/Comunidad nativa ASHANINKA SANKIROSHI.JPG",
    "La Comunidad Nativa Ashaninca de SANKIROSHI está ubicada a una distancia de 6.83 km a 13 minutos de la ciudad de Pichari y se encuentra ubicado a una altitud de 901 metros sobre el nivel del mar. Sankiroshi proviene del SANKIRO = CARACOL, abundancia de caracol. Está conformada por 40 jefes de familias y 200 habitantes, siendo creado el año 1970. Sankiroshi, es una comunidad que aún mantienen sus costumbres ancestrales y folclóricas. Las armas de los asháninkas son el arco y la flecha, confeccionadas con elementos naturales como la caña brava y la chonta. Son tradiciones la elaboración de masato 'bebida típica de los ashanincas', su idioma, la alimentación propia, vestimenta como la cushma, caza, pesca, elaboración de artesanía y agricultura. Sankiroshi, tiene también atractivos turísticos como algunas collpas donde se reúnen ciertas aves y animales de monte, así como cascadas y el monte virgen que aún permanece al cuidado de la población."
  ));
  
  this.lugares.push(new Lugar(
    "CASCADA DE PICHARI",
    "../../../assets/img/CASCADA DE PICHARI.jpg",
    "Saliendo del centro poblado capital, nos dirigimos por la vía asfaltada en dirección hacia el cenpro poblado de Omaya y a escasos metros nos dirigimos por el primer desvío que nos conduce a la cascada 'Pichari', encontrándose este a 20 min. Aquí encontramos la imponente cascada de Pichari, con pequeños saltos que van formando una fascinante caída de agua y estas recurren sobre dos posas, perfectas para echarse un chapuzón. Este lugar se encuentra acompañado de un restaurante, ofreciendo el tacacho con cecina, Paco frito y diversas platos típicos. Lugar propicio para ir con la familia y pasar una linda tarde e inolvidable."
  ));
  
  this.lugares.push(new Lugar(
    "PUERTO DE CCATUN RUMI",
    "../../../assets/img/PUERTO DE CCATUN RUMI.jpeg",
    "Desde Pichari capital, nos dirigimos al Puerto de Ccatun rumi, que está ubicado a una distancia de 4.61 Km en 15 min. En este lugar se encuentra el recurso turístico de Puerto Ccatun rumi, donde se concentran los llamados botes de carga, que transportan a la gente como pasajeros y las plataformas fluviales que transportan motocicletas, camiones y camionetas, para hacer el 'chimpa chimpa' al distrito de Sivia - Ayacucho. Este puerto se vuelve importante comercialmente, porque permite la interconexión económica entre Sivia y Pichari distritos ubicados en la margen izquierda y derecha del rio Apurimac. Cerca al Puerto, también podemos apreciar el pantano de Ccatun rumi, ubicado a una distancia de 2 Km y aun tiempo de 5 min. Dentro del recurso turístico se observa una flora (cañas, juncos, carrizo, sabolos) y fauna (distintas especies de ranas e insectos de gran variedad, odonatos, libélulas, dipteros, efemerópteros, etc.), un lugar interesante para la realización de investigaciones sobre u otras especies no reconocidas."
  ));
  
  this.lugares.push(new Lugar(
    "BALNEARIO DE PUERTO MAYO",
    "../../../assets/img/BALNEARIO DE PUERTO MAYO.jpg",
    "El centro poblado de Puerto Mayo se encuentra a 11.77 Km de distancia desde Pichari capital, asentado cerca de la orilla del río Apurimac, con una altitud de 540 m.s.n.m. Es una zona con producción agrícola, con una gran extensión de cultivos de cacao, plátanos, yuca, cocos y cítricos. En el Festival del Coco, que se lleva a cabo del 02 al 05 de julio, se programan la feria agropecuaria, agroindustrial y artesanal, donde se realiza concursos de tiro con flecha, canotaje, natación, carrera de motos lineales, maratón, campeonato deportivo de damas y varones, libre y máster. En la noche, se lleva a cabo el concurso de Mis Coco, así como la gran verbena popular por el Aniversario de los Comités de Autodefensa de Puerto Mayo."
  ));
  
  this.lugares.push(new Lugar(
    "CASCADA DE NOGALPAMPA",
    "../../../assets/img/CASCADA DE NOGALPAMPA.jpg",
    "La cascada de Nogalpampa se encuentra en el Centro Poblado de Puerto Mayo, en la comunidad de Nogalpampa, a 16.28 km. Es un tiempo de 30 minutos desde Pichari capital, a una altitud de 1025 m.s.n.m. Para llegar a la cascada en temporadas de lluvia se tiene que caminar por una herradura y en temporada de verano se ingresa con camionetas de doble tracción; la cascada de nogalpampa tiene una hermosa caída de agua abundante y frescas, es aproximadamente 15 metros de pendiente. El lugar tiene pequeñas caídas de agua, que se dirigen mediante un surco hacia una piscina natural, la misma que tiene una profundidad de 3 metros. Es concurrido por la población del lugar y poblaciones cercanas. Al lugar llegan usualmente los fines de semana, y en la zona se tiene una vista privilegiada de toda la flora que acompaña. Este espacio tiene una buena acogida por el público, por la presencia de agua limpia y saludable."
  ));
  
  this.lugares.push(new Lugar(
    "BAÑOS TERMALES DE KATSININKAJARI",
    "../../../assets/img/BAÑOS TERMALES DE KATSININKAJARI.jpg",
    "De Pichari capital hacia aguas termales de KATSIRINKAJARI, es 27.50 km a 50 minutos, aproximadamente, y con una altitud de 697.26 m.s.n.m. Katsirinkajari, es una palabra Ashaninka que significa AGUA CALIENTE, por presentar características termales. Cuenta con pequeña poza rústica habilitado por los pobladores, para el uso del visitante local o regional, que acude por sus propiedades curativas. Se ubica en las cercanías de la comunidad Nativa de Kitamaronkani, palabra Asháninka que significa cerro o ladera blanca, que precisamente se aprecia desde el camino al majestuoso Kitamaronkani. Los baños termales, tienen como origen un manantial, por el que brota agua caliente del subsuelo durante todo el año y cuya temperatura es superior a la atmosférica. Estas aguas contienen diversas sustancias minerales y desde siglos inmemorables se les atribuyen propiedades medicinales. Según cuentan antiguas leyendas, las propiedades medicinales de las aguas termales fueron descubiertas por animales, como los venados y sajinos, además de aves como garzas, que solían visitar los manantiales termales para curar las heridas. Es así como los humanos aprendieron a apreciar los 'dones' de este regalo de la naturaleza, pues en épocas remotas, no había medicamentos apropiados para atender las diferentes enfermedades; por lo que acuden, para bajar las dolencias tan diversas, como artritis, reumatismo y traumatismos."
  ));
  
  this.lugares.push(new Lugar(
    "PUERTO DE VILLA VISTA",
    "../../../assets/img/PUERTO DE VILLA VISTA.jpg",
    "El Puerto de Villa Vista se ubica a orillas de la margen derecha del rio Apurimac, en el centro poblado de Mantaro. La comunidad de Villa Vista se encuentra a una altitud de 506.72 m.s.n.m. Fue fundada en el año 2013, para hacer un nexo a la comunidad de Mayapo, del distrito de Llochegua. Este pintoresco lugar, destaca por su gran actividad comercial sobre todo los días domingos, así mismo cuenta con botes artesanales y botes chata o tipo plataforma, que hacen servicio de trasbordo o 'chimpa' de camionetas, autos y pobladores. Asimismo, el puerto acoge a botes que vienen de otros lugares como Puerto Cocos, Puerto Embarcadero, Esmeralda, Rio Tambo. En este punto el río Apurimac se amplía ofreciendo un espacio ideal para practicar natación y otros deportes acuáticos; así como la pesca deportiva, a las orillas del río. Se puede observar también la flora, fauna y aves como son los cormoranes, playeros, garza mayor, y garza menor."
  ));
  
  this.lugares.push(new Lugar(
    "Mirador de bosque natural Kimoshirinkani",
    "../../../assets/img/Mirador de bosque natural Kimoshirinkani.jpg",
    "Este mirador, también es conocido como Mirador de 'BOSQUE VIRGEN', se encuentra en una elevación natural aledaña a la Comunidad Nativa de Kimoshirinkani, sobre la margen derecha del río Negro, a una distancia de 8 km en 30 minutos aproximadamente del Centro Poblado de Mantaro y a una distancia de 38 km en 1 hora y 30 min de la ciudad de Pichari; a una altitud de 998.12 m.s.n.m. Desde este estratégico lugar, es posible divisar el bosque frondoso, natural, del hermoso paisaje que la rodea, que en su mayoría está cubierto por cultivos tropicales, con especies agroforestales. Es un lugar de aventura y la respiración del aire puro es constante, frente al bosque, donde la flora y fauna encanta al visitante, pone tranquilidad el alma, paz, con el aroma o perfume natural que emana el bosque. Desde este punto, también puede observarse el Río Apurimac serpenteado y la confluencia con el Río Mantaro que forman el Río Ene; por otro lado se observa un abismo o corte vertical profundo, aproximadamente de unos 500 metros de altura que se pierde en la espesura de los árboles. Es parte del circuito de comunidades nativas siendo el punto de inicio la comunidad de Shantoshari, Saruyacu, Kapiroshi, Kimoshirinkani y Cuviviari; en tal sentido, el 'MIRADOR DE BOSQUE NATURAL KIMOSHIRINKANI' es una parada. Además es el punto de inicio para excursiones de aventuras en la espesura del bosque, para estar en contacto con la flora, fauna, cascadas y cataratas hasta llegar al 'VALLE DEL KEMPIRI' donde existen otras comunidades nativa, como Pitirinkeni, Tiñovankani, Comitarinkani, Catungo Kempiri."
  ));
  
  this.lugares.push(new Lugar(
    "Puerto Embarcadero Puerto Ene",
    "../../../assets/img/Puerto Embarcadero Puerto Ene.jpg",
    "El puerto de 'Embarcadero Puerto Ene' está ubicado en el centro poblado de Tambo del Ene, a orillas y margen derecha del río Apurimac, fue creado el año 2005; siendo el aniversario, el 28 de abril; en la actualidad cuenta con 110 familias y 400 habitantes en general, tiene una altitud de 472 m.s.n.m., a una distancia de 10 km a 37 minutos desde el centro poblado de Natividad. El puerto es uno de las zonas más importantes del distrito de Pichari, así mismo es una parada de botes, chalupas (botes con techos) chatas, que vienen del Puerto Ocopa que a su vez hay una conexión con este además de Mantaro (San Martin de Pangoa). Una de las actividades más resaltantes en el puerto, es el transbordo de carga y pasajero al puerto Ocopa o Mantaro y también disfrutar del río Ene, de las diversas aves como son los cormoranes, playeros, garza mayor y garza menor, etc. Así mismo, se puede hacer recorrido en bote dicho lugar está dedicada al comercio debido a la localización estratégica que tiene. Muchas comunidades concurren para realizar sus compras semanales y/o relajarse después de la ardua labor agrícola, cuenta con alojamientos, boticas, tiendas agrícolas, ferretería, lencería, tiendas comerciales, restaurantes con vista al río Ene. La afluencia de visitantes colonos, asháninkas y turistas extranjeros es constante. Cuenta con un mirador hacia la confluencia del rio Apurimac y Mantaro donde forman el rio Ene, se divisa el paisaje del lugar y el rio serpenteado."
  ));
  
  this.lugares.push(new Lugar(
    "Rio Kempiri",
    "../../../assets/img/Rio Kempiri.jpg",
    "El 'Rio Kempiri' está ubicado en el centro poblado de Progreso de reciente creación, año 2017, en la actualidad cuenta con 200 familias y 650 habitantes. El recurso turístico se encuentra en la parte baja de la localidad de Nuevo Progreso, a una altitud de 486 m.s.n.m., y a una distancia de 66 km a 2 horas, 30 min. Desde la ciudad de Pichari; sus aguas del río presenta una biodiversidad de especies acuáticas y a sus riberas se puede apreciar una gran abundancia de flora y fauna silvestre. En cuanto a flora aún se puede encontrar los árboles maderables como el tornillo, roble alcanfor, lagarto, quinacho, cedro y caoba; muchos de ellos fueron talados por los extractores que dejaron en gran medida deforestada. En cuanto fauna silvestre, se ha encontrado los 'samaños', 'sihuas', tortugas, paujil, monitos fralle, gavilán, loritos, guagamayo, patos silvestres, entre otros. En las orillas del río se ha encontrado una gran población de mariposas multicolores que posan sobre las masas de arcilla limosa de las riberas del río Kempiri."
  ));
}
  ngOnInit(): void {
    this.lugarGuardadoJSON= localStorage.getItem('miNumero');
    console.log(this.lugarGuardadoJSON);
  }



}
