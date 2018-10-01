import Vue from 'vue';
import Component from 'vue-class-component';
import { Emit, Prop } from 'vue-property-decorator';

@Component
export default class BaseOverlay extends Vue
{
    @Prop()
    public show!: boolean;

    @Emit('close')
    private close(): void
    {
        // close overlay
    }
}
