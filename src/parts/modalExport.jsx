import { ButtonI, ButtonT } from "../components/button.jsx"
import Textarea from "../components/textarea.jsx"
import { HeaderTT } from "../components/header.jsx";
import { useContext } from "react"
import { InfoProvider } from "../hooks/contextInfo.jsx";
import { DataProvider } from "../hooks/contextData.jsx";

export default function ModalExport({css}){
  const { SetModalValue } = useContext(InfoProvider)
  const { dataOriginal } = useContext(DataProvider);

  const CloseFunction = (info) => {
    SetModalValue(info);
  }
  // ==============================
  const FunExportdata = () => {
    let link = document.createElement('a');
    link.download = 'hello.txt';
    let blob = new Blob([JSON.stringify(data, null, 2)], {type: 'text/plain'});
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  }


  const FunPasteText = async () => {
    try {
      // Leer el contenido del portapapeles
      const clipboardText = await navigator.clipboard.readText();
      const inputField = document.getElementById("ula5goTPzc");
      inputField.value = clipboardText;
    } catch (error) {
      console.error('Error al leer el contenido del portapapeles:', error);
    }
  };

  // ==============================


  return(
    <>
      <div className={`${css}`}>
        <section className={`${css}_main`}>
          <HeaderTT
            css={`${css}_header`}
            title="Transfer your bookmarks"
            text="Import or share your data with Saveta">
            <ButtonI
              css={`${css}_header_action`}
              icon="mdi:window-close"
              fn={() => CloseFunction(false)}
            />
          </HeaderTT>
          <Textarea
            id="ula5goTPzc"
            css={`${css}_label`}
            placeholder="Upload database..."
            value={JSON.stringify(dataOriginal)}>
          </Textarea>
          <ButtonT
            css={`${css}_button2`}
            fn={FunPasteText}>
            Paste from clipboard
          </ButtonT>
          <sup className={`${css}_subtext`}>
            * Don't forget to click on "import data", if you have added new information.
          </sup>
        </section>
        <footer className={`${css}_footer`}>
          <ButtonT
            css={`${css}_button`}
          >
            Import data
          </ButtonT>
          <ButtonT
            css={`${css}_button`}
            fn={FunExportdata}>
            Export file
          </ButtonT>
        </footer>
      </div>
    </>
  )
}
