import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Overlay extends Vue
{
    @Prop()
    public show!: boolean;

    @Emit('close')
    private close(): void
    {
        // close overlay
    }
}
