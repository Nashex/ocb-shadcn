import ControlMenu from "@/components/control-menu/control-menu.component";
import ShadCNDemo from "@/components/demo/shad-cn-demo.component";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="p-4 max-w-5xl w-full">
        <ControlMenu />
      </div>

      <ShadCNDemo />

      <article className="ocb p-4 max-w-5xl w-full">
        <div className="mb-4 border-t border-border py-4">
          <h2 className="text-xl mb-2 font-medium">Article Components</h2>
          <p>
            These should be fully customizable and should change sizing and spacing.
          </p>
        </div>
        <h3 className="text-lg mb-1 font-medium">Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sed purus vel nulla suscipit maximus vel vitae libero. Cras vestibulum
          lectus non rutrum sollicitudin. Curabitur non nibh non mauris accumsan
          facilisis. Duis aliquam finibus nisl, a pulvinar est rhoncus ac. Morbi
          scelerisque, ipsum sed sagittis egestas, ante risus ullamcorper urna,
          vel eleifend turpis mi lacinia nunc. Aliquam urna augue, egestas non
          dui et, dignissim suscipit nunc. Nam vitae sem vestibulum, tincidunt
          lorem quis, gravida risus.
        </p>
        <br />
        <h3 className="text-lg mb-1 font-medium">Orci Varius</h3>
        <p>
          Vestibulum at magna ac lectus condimentum lobortis. Pellentesque in
          tellus magna. Sed dapibus dapibus imperdiet. Integer quis est eget
          erat rhoncus tincidunt. Morbi tincidunt rutrum ex id imperdiet.
          Praesent in nibh lectus. Nullam pretium convallis laoreet. Phasellus
          bibendum eget eros non semper. In ac vestibulum lectus. Mauris
          convallis sagittis mi, eget facilisis dolor molestie quis. Duis
          sagittis arcu orci, sed dictum odio faucibus ac. Maecenas vestibulum
          dolor felis, et cursus nisl aliquam id. Sed laoreet orci non ante
          cursus, sit amet imperdiet velit hendrerit. Cras ultrices tincidunt
          dui non convallis. Pellentesque euismod, purus in tristique
          consectetur, massa odio iaculis lacus, id dignissim neque sem quis
          dui.
        </p>
        <br />
        <h3 className="text-lg mb-1 font-medium">Orci Varius</h3>
        <p>
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Curabitur dapibus, ex a fringilla mattis,
          sapien nisi sollicitudin mauris, sed fermentum leo nisl at dolor.
          Phasellus viverra justo eget ipsum egestas malesuada. Donec odio
          lorem, tempus quis nunc ut, mollis tincidunt ligula. Suspendisse
          suscipit et nunc id suscipit. Phasellus vitae urna metus. Pellentesque
          vel varius dui. In hac habitasse platea dictumst. In hac habitasse
          platea dictumst. Nullam non finibus mi. Maecenas finibus, mauris ut
          iaculis efficitur, diam orci dictum risus, sit amet ornare eros velit
          vel urna. Donec blandit, lorem quis commodo malesuada, nibh purus
          dignissim metus, id tempor enim odio quis libero. Proin in dui
          ultrices, fermentum nisl vel, faucibus nulla. Suspendisse volutpat
          nunc sed ligula cursus, vitae facilisis risus pretium.
        </p>
      </article>
    </main>
  );
}
