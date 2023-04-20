//
//  NetworkModule.swift
//  PowerIO
//
//  Created by Andrew Ananda on 20/04/2023.
//

import Foundation


@objc(NetworkModule)
class NetworkModule: NSObject {
  
  @objc
  func fetchMerchant(_ requestUrl: String, resolve: @escaping RCTPromiseResolveBlock,  rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
    let url = URL(string: requestUrl)!
    let request = URLRequest(url: url)
    
    let task = URLSession.shared.dataTask(with: request) { data, response, error in
      if let data = data {
        print("DataPrinted \(data)")
        resolve(String(data: data, encoding: .utf8) )
      } else if let error = error {
        print("ErrorrOccured \(error)")
        reject("500", "error", error)
      }
    }
    task.resume()
  }
  
  @objc static func requiresMainQueueSetup() -> Bool {
      return true
  }
  
}
