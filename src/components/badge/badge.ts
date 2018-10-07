import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Badge extends Vue
{
    @Prop()
    public variant!: string;

    @Prop()
    public href!: string;

    @Prop()
    public type!: string;

    private get badgeClasses(): any
    {
        return {
            'badge': true,
            'badge--ghost': this.type === 'ghost',
            'badge--isLink': this.href != null,
            ['badge--' + this.variant]: this.variant != null,
        };
    }
}
