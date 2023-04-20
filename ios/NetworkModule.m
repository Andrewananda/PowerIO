//
//  NetworkModule.m
//  PowerIO
//
//  Created by Andrew Ananda on 20/04/2023.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"



@interface RCT_EXTERN_MODULE(NetworkModule, NSObject)

RCT_EXTERN_METHOD(fetchMerchant: (NSString *)requestUrl resolve:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

//RCT_EXTERN_METHOD(getPassesOf:(NSString *)test resolve:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject);


@end
