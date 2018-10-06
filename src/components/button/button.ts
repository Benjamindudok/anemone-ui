import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue
{
    @Prop()
    public variant!: string;

    @Prop()
    public href!: string;

    @Prop()
    public type!: string;

    private get buttonClasses(): any
    {
        return {
            'button': true,
            'button--ghost': this.type === 'ghost',
            'button--text': this.type === 'text',
            ['button--' + this.variant]: this.variant != null,
        };
    }
}
