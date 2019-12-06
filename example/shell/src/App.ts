import { Component, Vue, Watch } from "vue-property-decorator";
import NavBar from "./components/NavBar.vue";
import { codeSharpTheme, rockstarsTheme } from "./themes";

@Component({
  components: {
    NavBar
  }
})
export default class App extends Vue {
  public theme: any = codeSharpTheme;

  public get isCodeSharp() {
    return this.theme === codeSharpTheme;
  }

  public mounted() {
    this.themeChanged();
  }

  public setCodeSharpTheme() {
    this.theme = codeSharpTheme;
  }

  public setRockstarsTheme() {
    this.theme = rockstarsTheme;
  }

  @Watch("theme")
  public themeChanged() {
    Object.keys(this.theme).forEach(property => {
      this.setProperty(property, this.theme[property]);
    });
  }

  private getProperty(property: string): string {
    return (document.documentElement.style as any).getPropertyValue(
      `--${property}`
    );
  }

  private setProperty(property: string, value: string) {
    (document.documentElement.style as any).setProperty(`--${property}`, value);
  }
}
