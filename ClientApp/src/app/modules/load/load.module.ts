import {
  Directive,
  Inject,
  Injector,
  Input,
  NgModuleFactory,
  NgModuleFactoryLoader,
  NgModuleRef, OnChanges,
  OnDestroy,
  OnInit, SimpleChanges,
  ViewContainerRef
} from '@angular/core';
import {LAZY_MODULES, LAZY_MODULES_MAP} from './lazyLoadModulesMap';

@Directive({
  selector: '[appLoadModule]'
})
export class LoadModuleDirective implements OnInit, OnDestroy, OnChanges {
  @Input('appLoadModule') moduleName: keyof LAZY_MODULES;
  @Input('appLoadModuleComponent') componentName: string;
  private moduleRef: NgModuleRef<any>;

  constructor(
    private vcr: ViewContainerRef,
    private injector: Injector,
    private loader: NgModuleFactoryLoader,
    @Inject(LAZY_MODULES_MAP) private modulesMap
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loader
      .load(this.modulesMap[this.moduleName])
      .then((moduleFactory: NgModuleFactory<any>) => {
        this.moduleRef = moduleFactory.create(this.injector);
        const rootComponent = this.moduleRef['_bootstrapComponents'].find(c => c.name === this.componentName);
        const factory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponent);
        this.vcr.clear();
        this.vcr.createComponent(factory);
      })
      .catch(error => console.error(error));
  }

  ngOnDestroy(): void {
    this.moduleRef.destroy();
  }

}
