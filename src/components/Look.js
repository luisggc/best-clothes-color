import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

function Look() {
  // https://editor.method.ac/
  const [w, h] = [380, 583];

  const [xypositions, setxypositions] = useState([0, 0]);
  const [onSelectColor, setonSelectColor] = useState();

  const [currentItem, setCurrentItem] = useState("");
  const [colors, setColors] = useState({
    shirt: "#7aaa40",
    pants: "#3a2521",
    shoes: "#c4c5c7",
  });

  const getXYposition = () => {
    const e = window.event;
    let [x, y] = [e.clientX, e.clientY];
    const color_picker_width = 320;
    const windows_screen = window.innerWidth;
    if (x + color_picker_width > windows_screen) {
      x = windows_screen - color_picker_width;
    }
    return [x, y];
  };
  const openPicker = (type) => {
    setxypositions(getXYposition());
    setonSelectColor(colors[type]);
    setCurrentItem(type);
  };

  const onChangeComplete = (color) => {
    setonSelectColor(color);
    console.log(color);
    setColors((ps, _) => {
      return { ...ps, [currentItem]: color.hex };
    });
    setCurrentItem("");
  };

  return (
    <div className="look">
      <svg width={w} height={h} xmlns="http://www.w3.org/2000/svg">
        <g className="look-image">
          <image y="0" href={require("../assets/clothes/All White.png")} width={w} height={h} />

          <g onClick={() => openPicker("shirt")}>
            <path
              fill={colors.shirt}
              d="m211.33095,163.74734c0,0 8.99994,-4.83331 8.8344,-4.99826c0.16554,0.16495 8.33216,-0.00171 8.16662,-0.16667c0.16554,0.16496 7.6655,1.66495 7.49996,1.49999c0.16554,0.16496 6.99883,2.33161 6.83329,2.16666c0.16554,0.16495 2.99886,2.33161 2.83332,2.16665c0.16554,0.16496 2.16553,2.49828 1.99999,2.33332c0.16554,0.16496 2.99885,4.99826 2.99885,4.99826c0,0 0.5,-16.83323 0.5,-16.83323c0,0 1.33332,-10.83327 1.16778,-10.99823c0.16554,0.16496 1.66554,-5.83501 1.5,-5.99996c0.16554,0.16495 1.83219,-7.66834 1.66665,-7.83329c0.16554,0.16495 0.49887,-10.50165 0.33333,-10.66661c0.16554,0.16496 -2.00111,-4.83501 -2.16665,-4.99997c0.16554,0.16496 -2.33444,-3.33502 -2.49999,-3.49998c0.16555,0.16496 -5.16776,-2.16836 -5.3333,-2.33332c0.16554,0.16496 -5.50109,-2.33502 -5.66663,-2.49998c0.16554,0.16496 -7.50108,-2.5017 -7.66662,-2.66665c0.16554,0.16495 -10.00107,-3.16836 -10.16661,-3.33332c0.16554,0.16496 -8.83441,6.16493 -8.99995,5.99997c0.16554,0.16496 -9.00107,4.16493 -9.16661,3.99998c0.16554,0.16495 -6.50109,2.16494 -6.50109,2.16494c0,0 -7.16662,1.16666 -7.33216,1.0017c0.16554,0.16496 -7.16775,1.16495 -7.33329,1c0.16554,0.16495 -1.66778,-1.00171 -1.83333,-1.16666c0.16555,0.16495 -0.16779,-1.5017 -0.33333,-1.66666c0.16554,0.16496 0.99887,-2.0017 0.99887,-2.0017c0,0 -7.83328,6.16663 -7.99883,6.00168c0.16555,0.16495 -4.0011,1.83161 -4.0011,1.83161c0,0 -2.99998,1.66666 -3.16552,1.5017c0.16554,0.16496 -2.66778,3.66494 -2.83332,3.49998c0.16554,0.16496 -2.66777,1.33162 -2.83331,1.16666c0.16554,0.16496 -7.66775,3.33161 -7.83329,3.16665c0.16554,0.16496 -4.66777,1.66495 -4.83331,1.49999c0.16554,0.16496 -3.33443,3.16494 -3.49998,2.99998c0.16555,0.16496 -3.83443,5.66493 -3.99997,5.49997c0.16554,0.16496 -2.33445,4.99826 -2.49999,4.83331c0.16554,0.16495 -1.66778,3.66493 -1.83332,3.49997c0.16554,0.16496 0.16554,2.66495 0,2.49999c0.16554,0.16496 -1.16778,2.16494 -1.33333,1.99999c0.16555,0.16495 1.16554,2.49827 1,2.33332c0.16554,0.16495 0.49887,2.99827 0.33333,2.83331c0.16554,0.16496 -0.66779,2.99828 -0.83333,2.83332c0.16554,0.16496 -1.00112,0.66495 -1.16666,0.5c0.16554,0.16495 -0.50112,2.49827 -0.66666,2.33332c0.16554,0.16495 0.66554,1.33161 0.5,1.16666c0.16554,0.16495 -0.83446,2.33161 -1,2.16665c0.16554,0.16496 -2.16778,5.33159 -2.16778,5.33159c0,0 4.33331,-5.3333 4.16777,-5.49825c0.16554,0.16495 3.99885,-2.0017 3.83331,-2.16666c0.16554,0.16496 3.66552,0.99829 3.49998,0.83333c0.16554,0.16496 8.16549,2.99827 8.16549,2.99827c0,0 2.99999,19.66656 2.99999,19.66656c0,0 0.83333,6.16663 0.83333,6.16663c0,0 -1.41668,-8.83334 0.83332,9.16661l5.08322,0.00003l27.8332,-6.58329l19.08329,-9.74996l0.58332,-3.24998l3.41665,-16.74992z"
            />
            <path
              fill={colors.shirt}
              d="m139.30249,238.61679c0,0 3.91632,-4.08288 3.7675,-4.22221c0.14882,0.13933 2.81524,-2.69374 2.66642,-2.83307c0.14882,0.13933 0.31547,-1.02722 0.16665,-1.16656c0.14882,0.13934 -1.35104,-0.86057 -1.49986,-0.9999c0.14882,0.13933 -0.01783,-1.86048 -0.16665,-1.99982c0.14882,0.13934 6.48156,-4.52689 6.33274,-4.66622c0.14882,0.13933 3.14853,-1.86048 2.99971,-1.99982c0.14882,0.13934 2.98189,-0.69392 2.83307,-0.83325c0.14882,0.13933 9.98123,0.30598 9.98123,0.30598c0,0 19.49818,1.33321 19.34936,1.19388c0.14882,0.13933 10.64783,-0.36062 10.49901,-0.49996c0.14882,0.13934 13.1476,-3.19368 12.99878,-3.33302c0.14882,0.13934 5.81496,-1.19387 5.66614,-1.33321c0.14882,0.13934 4.81505,-0.36061 4.66623,-0.49995c0.14882,0.13934 9.14798,-4.8602 8.99915,-4.99953c0.14883,0.13933 4.48175,-5.8601 4.48175,-5.8601c0,0 4.33293,-11.49893 4.18411,-11.63826c0.14882,0.13933 4.14844,-8.35987 3.99962,-8.4992c0.14882,0.13933 0.64878,8.30523 0.49996,8.1659c0.14882,0.13933 0.14882,6.13877 0,5.99944c0.14882,0.13933 0.98207,9.97174 0.83325,9.83241c0.14882,0.13933 -0.35113,7.63863 -0.35113,7.63863c0,0 -2.16646,9.99906 -2.31529,9.85973c0.14883,0.13933 -3.01754,8.13858 -3.16636,7.99925c0.14882,0.13933 -2.5176,5.80547 -2.5176,5.80547c0,0 -1.83316,6.49939 -1.98198,6.36005c0.14882,0.13934 -0.18448,3.63901 -0.18448,3.80566c0,0.16665 -0.66661,2.49977 -0.66661,2.49977c0,0 -48.08111,-6.27052 -71.00604,-9.54104c-22.92493,-3.27052 -20.69368,-3.54105 -21.06868,-4.54105z"
            />
          </g>

          <g onClick={() => openPicker("pants")}>
            <path
              fill={colors.pants}
              d="m128.44106,265.44111c0,0 -2.26401,-3.12704 -0.73599,6.25408c1.52801,9.38113 3.02801,9.38113 3.02801,9.38113c0,0 0.382,6.25408 0.382,6.25408c0,0 0.02801,-7.28585 -1.882,10.30377c-1.91002,17.58961 -0.41002,17.83961 -0.41002,17.83961c0,0 0.76401,82.08486 0.76401,82.08486c0,0 2.67402,13.28993 2.67402,13.28993c3.43803,35.17923 5.15705,51.00988 6.01655,58.92521c0.85951,7.91532 0.85951,7.91532 0.85951,11.43325c0,7.03585 0.76401,-3.12704 0,7.03585c-0.76401,10.16289 -1.91002,1.9544 -0.76401,10.16289c1.14601,8.20849 1.14601,8.20849 1.14601,8.20849c0,0 0.382,-3.12704 -1.52801,3.9088c-1.91002,7.03585 -1.52801,1.17264 -1.91002,7.03585c-0.382,5.8632 -1.14601,9.38113 -1.14601,9.38113c0,0 21.77419,4.69056 21.77419,4.69056c0,0 4.58404,5.47232 9.16808,-0.78176c4.58404,-6.25408 4.58404,-6.25408 4.58404,-6.25408c0,0 1.52801,-8.20849 1.52801,-8.20849c0,0 6.11205,-5.47232 6.11205,-5.47232c0,0 -3.05603,-12.89905 -3.05603,-12.89905c0,0 -0.76401,-5.8632 -0.76401,-5.8632c0,0 3.43803,-11.72641 3.43803,-11.72641c0,0 -1.91002,-59.02292 -1.91002,-59.02292c1.99999,0 -1.52801,-13.68081 -1.52801,-13.68081c0,0 4.04201,-11.61729 2.29202,-12.11729c2.99436,-17.60121 4.04487,-28.44814 4.34679,-34.89476c0.30192,-6.44663 -0.14475,-8.49295 -0.14475,-8.49295c0,0 3.43803,13.28993 6.49406,24.23458c3.05603,10.94465 3.05603,10.94465 3.05603,10.94465c0,0 -1.14601,-5.47232 1.52801,13.68081c2.67402,19.15313 1.91002,12.11729 2.67402,19.15313c0.76401,7.03585 -2.67402,-1.56352 0.76401,7.03585c3.43803,8.59937 2.29202,-5.47232 3.43803,8.59937c1.14601,14.07169 -3.05603,-19.54401 1.14601,14.07169c4.20204,33.6157 10.31409,17.58961 4.20204,33.6157c-6.11205,16.02609 -6.11205,16.02609 -6.11205,16.02609c0,0 0.76401,8.59937 4.20204,12.50817c3.0785,4.41465 -5.34805,1.9544 -5.34805,10.16289c0,8.20849 0,8.20849 0,8.20849c0,0 -1.91002,-0.78176 0,4.69056c1.91002,5.47232 -6.49406,5.47232 1.91002,5.47232c8.40407,0 0.76401,-0.39088 8.40407,0c7.64007,0.39088 0,-1.17264 7.64007,0.39088c7.64007,1.56352 1.52801,0.39088 7.64007,1.56352c6.11205,1.17264 0.76401,5.47232 6.11205,1.17264c5.34805,-4.29968 4.58404,4.29968 5.34805,-4.29968c0.76401,-8.59937 0.382,-2.73616 0.76401,-8.59937c0.382,-5.8632 0.382,-5.8632 0.382,-5.8632c0,0 1.14601,-5.47232 1.14601,-5.47232c0,0 -4.96604,-13.68081 -4.96604,-13.68081c0,0 8.02207,-8.20849 8.02207,-8.20849c0,0 1.52801,-8.59937 1.52801,-8.59937c0,0 -4.58404,-10.94465 -4.58404,-10.94465c0,0 0,-25.01634 0,-25.01634c0,0 3.82003,-1.9544 0,-26.57986c-3.82003,-24.62546 -0.76401,-16.41697 -3.82003,-24.62546c-3.05603,-8.20849 -3.05603,-8.20849 -3.05603,-8.20849c0,0 2.29202,-6.25408 2.29202,-6.25408c0,0 0.76401,-16.02609 0.76401,-16.02609c0,0 -5.34805,-18.44955 -5.34805,-18.44955c0,0 0.76401,-41.19878 0.76401,-41.19878c0,0 3.43803,-6.25408 3.43803,-6.41044c1.49999,-5.09362 1.14601,-7.11402 1.14601,-18.84043c0,-11.72641 3.05603,-2.34528 0,-11.72641c-3.05603,-9.38113 4.58404,-1.17264 -3.05603,-9.38113c-7.64007,-8.20849 5.34805,-1.17264 -7.64007,-8.20849c-12.98812,-7.03585 14.51613,-2.34528 -12.98812,-7.03585c-27.50424,-4.69056 12.22411,0.39088 -27.50424,-4.69056c-39.72835,-5.08144 -39.72835,-4.61239 -39.72835,-4.61239l-6.49405,12.31272l-3.24702,6.15636l-1.62352,3.07819l-0.81175,1.53909l-0.40588,0.76954l-0.40588,0.76955z"
            />
          </g>

          <g onClick={() => openPicker("shoes")}>
            <path
              fill={colors.shoes}
              d="m181.34732,575.11041l-0.23582,-4.15296c0.11083,0.02827 0.11083,-3.59646 0.11083,-3.59646c0,0 1.24991,-3.9997 1.13907,-4.02797c0.11083,0.02827 1.61072,-2.47154 1.49989,-2.49981c0.11083,0.02827 2.98562,-2.72152 2.87479,-2.7498c0.11083,0.02827 4.36052,-2.22156 4.24968,-2.24983c0.11083,0.02827 1.48573,-1.59661 1.3749,-1.62488c0.11083,0.02827 2.11068,-2.59653 1.99985,-2.6248c0.11083,0.02827 0.98577,-1.7216 0.87493,-1.74987c0.11083,0.02827 2.23567,-2.59653 2.12484,-2.6248c0.11083,0.02827 1.98569,-2.72152 1.87486,-2.7498c0.11083,0.02827 2.11068,-2.59653 1.99985,-2.6248c0.11083,0.02827 0.23582,-0.84666 0.12499,-0.87493c0.11083,0.02827 4.11054,-0.59668 3.9997,-0.62495c0.11083,0.02827 5.11046,-0.09672 5.11046,-0.09672c0,0 4.87464,0.87493 4.87464,0.87493c0,0 5.12462,1.49989 5.01378,1.47162c0.11083,0.02827 3.36059,1.27818 3.24976,1.24991c0.11083,0.02827 2.98562,1.15319 2.98562,1.15319c0,0 3.37475,-0.12499 3.26391,-0.15326c0.11083,0.02827 2.98562,-0.3467 2.87479,-0.37497c0.11083,0.02827 1.73571,-1.09665 1.62488,-1.12492c0.11083,0.02827 1.36074,-0.09672 1.36074,-0.09672c0,0 0.49996,2.12484 0.38913,2.09657c0.11083,0.02827 0.36082,1.52816 0.24998,1.49989c0.11083,0.02827 0.11083,2.65307 0,2.6248c0.11083,0.02827 0.11083,1.52816 0,1.49989c0.11083,0.02827 0.36082,1.52816 0.36082,1.52816c0,0 0.24998,2.37482 0.24998,2.37482c0,0 0.24998,2.12484 0.13915,2.09657c0.11083,0.02827 -0.26414,1.40317 -0.26414,1.40317c0,0 0.49996,1.87486 0.38913,1.84659c0.11083,0.02827 0.23582,1.65315 0.12499,1.62488c0.11083,0.02827 0.11083,1.90313 0,1.87486c0.11083,0.02827 0.23582,1.65315 0.23582,1.65315c0,0 -4.74965,3.37475 -4.86048,3.34648c0.11083,0.02827 -6.38868,2.65307 -6.49952,2.6248c0.11083,0.02827 -2.76395,1.27818 -2.87479,1.24991c0.11083,0.02827 -0.63911,1.40317 -0.74994,1.3749c0.11083,0.02827 -1.26406,0.90321 -1.3749,0.87493c0.11083,0.02827 -3.38891,1.0282 -3.49974,0.99993c0.11083,0.02827 -2.76395,0.52823 -2.87479,0.49996c0.11083,0.02827 -6.76365,0.52823 -6.87449,0.49996c0.11083,0.02827 -2.63896,0.02827 -2.7498,0c0.11083,0.02827 -23.88738,-1.7216 -23.88738,-1.7216z"
            />
            <path
              fill={colors.shoes}
              d="m171.20095,523.66883c0,0 1.5,1.5 1.46616,1.49923c0.03384,0.00077 1.03385,1.83411 1.03385,1.83411c0,0 0.66667,2.83334 0.63282,2.83257c0.03384,0.00077 0.20051,2.50078 0.20051,2.50078c0,0 0.83334,2.83334 0.79949,2.83257c0.03384,0.00077 0.53385,1.83411 0.53385,1.83411c0,0 0.16667,2.00001 0.16667,2.00001c0,0 0,4.16668 -0.03384,4.16591c0.03384,0.00077 0.20051,5.00078 0.16667,5.00001c0.03384,0.00077 0.03384,5.83412 0,5.83335c0.03384,0.00077 -2.7995,1.00077 -2.83334,1c0.03384,0.00077 -7.96618,1.16744 -7.96618,1.16744c0,0 -5.83335,0.33333 -5.86719,0.33256c0.03384,0.00077 -7.29951,-0.1659 -7.33335,-0.16667c0.03384,0.00077 -4.46617,0.83411 -4.50001,0.83334c0.03384,0.00077 -6.79951,0.83411 -6.83335,0.83334c0.03384,0.00077 -9.46618,1.50078 -9.50003,1.5c0.03384,0.00077 -8.63285,0.50077 -8.66669,0.5c0.03384,0.00077 -5.2995,-0.33256 -5.33335,-0.33333c0.03384,0.00077 -7.29951,-0.83256 -7.29951,-0.83256c0,0 -7.00002,-0.83334 -7.03386,-0.83411c0.03384,0.00077 -2.7995,-0.83256 -2.96617,-0.83256c-0.16667,0 -3.00001,-0.5 -3.03385,-0.50077c0.03384,0.00077 -0.13282,-1.33257 -0.13282,-1.33257c0,0 -0.16667,-2.00001 -0.20051,-2.00078c0.03384,0.00077 0.36718,-2.33257 0.33333,-2.33334c0.03384,0.00077 0.86718,-2.99924 0.83334,-3.00001c0.03384,0.00077 1.53385,-2.1659 1.5,-2.16667c0.03384,0.00077 3.70052,-1.83257 3.66668,-1.83334c0.03384,0.00077 4.53386,-1.49923 4.50001,-1.5c0.03384,0.00077 6.70053,-1.83257 6.66668,-1.83334c0.03384,0.00077 5.53386,-1.6659 5.50001,-1.66667c0.03384,0.00077 4.20052,-1.83257 4.16668,-1.83334c0.03384,0.00077 3.53385,-1.83257 3.50001,-1.83334c0.03384,0.00077 3.53385,-2.6659 3.50001,-2.66667c0.03384,0.00077 2.53385,-1.99923 2.50001,-2.00001c0.03384,0.00077 1.36718,-1.49923 1.33334,-1.5c0.03384,0.00077 0.20051,-1.33257 0.16667,-1.33334c0.03384,0.00077 3.20052,-0.1659 3.16668,-0.16667c0.01692,0.00038 10.37885,2.2505 13.66001,3.10474c1.64058,0.42712 1.63596,0.46361 8.01543,2.11189c3.18974,0.82415 4.72576,0.0514 5.61173,-0.81803l5.87773,-8.06428l0.03568,-0.33356z"
            />
          </g>
        </g>
      </svg>
      <div
        className="color-selector"
        style={{
          visibility: currentItem === "" ? "hidden" : "visible",
          left: xypositions[0],
          top: xypositions[1],
        }}
      >
        <ColorPicker onChangeComplete={onChangeComplete} color={onSelectColor} />
      </div>
    </div>
  );
}

export default Look;
